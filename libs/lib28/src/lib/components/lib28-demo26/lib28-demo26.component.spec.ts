import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo26Component } from './lib28-demo26.component';

describe('Lib28Demo26Component', () => {
  let component: Lib28Demo26Component;
  let fixture: ComponentFixture<Lib28Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
