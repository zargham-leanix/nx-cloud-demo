import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo26Component } from './lib91-demo26.component';

describe('Lib91Demo26Component', () => {
  let component: Lib91Demo26Component;
  let fixture: ComponentFixture<Lib91Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
