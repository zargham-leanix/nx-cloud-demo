import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo17Component } from './lib69-demo17.component';

describe('Lib69Demo17Component', () => {
  let component: Lib69Demo17Component;
  let fixture: ComponentFixture<Lib69Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
