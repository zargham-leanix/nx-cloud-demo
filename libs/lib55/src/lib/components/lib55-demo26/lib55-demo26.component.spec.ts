import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo26Component } from './lib55-demo26.component';

describe('Lib55Demo26Component', () => {
  let component: Lib55Demo26Component;
  let fixture: ComponentFixture<Lib55Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
