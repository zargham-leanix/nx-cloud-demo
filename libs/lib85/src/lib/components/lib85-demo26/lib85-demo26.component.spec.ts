import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo26Component } from './lib85-demo26.component';

describe('Lib85Demo26Component', () => {
  let component: Lib85Demo26Component;
  let fixture: ComponentFixture<Lib85Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
