import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo42Component } from './lib69-demo42.component';

describe('Lib69Demo42Component', () => {
  let component: Lib69Demo42Component;
  let fixture: ComponentFixture<Lib69Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
