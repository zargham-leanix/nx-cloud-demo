import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo26Component } from './lib25-demo26.component';

describe('Lib25Demo26Component', () => {
  let component: Lib25Demo26Component;
  let fixture: ComponentFixture<Lib25Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
