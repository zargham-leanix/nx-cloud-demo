import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo43Component } from './lib69-demo43.component';

describe('Lib69Demo43Component', () => {
  let component: Lib69Demo43Component;
  let fixture: ComponentFixture<Lib69Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
