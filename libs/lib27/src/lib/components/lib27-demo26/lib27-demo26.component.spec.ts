import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo26Component } from './lib27-demo26.component';

describe('Lib27Demo26Component', () => {
  let component: Lib27Demo26Component;
  let fixture: ComponentFixture<Lib27Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
