import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo26Component } from './lib71-demo26.component';

describe('Lib71Demo26Component', () => {
  let component: Lib71Demo26Component;
  let fixture: ComponentFixture<Lib71Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
