import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo26Component } from './lib80-demo26.component';

describe('Lib80Demo26Component', () => {
  let component: Lib80Demo26Component;
  let fixture: ComponentFixture<Lib80Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
