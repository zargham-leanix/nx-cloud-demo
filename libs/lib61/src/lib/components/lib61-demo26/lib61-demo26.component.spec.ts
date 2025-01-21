import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo26Component } from './lib61-demo26.component';

describe('Lib61Demo26Component', () => {
  let component: Lib61Demo26Component;
  let fixture: ComponentFixture<Lib61Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
