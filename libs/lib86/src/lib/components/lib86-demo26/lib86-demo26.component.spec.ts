import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo26Component } from './lib86-demo26.component';

describe('Lib86Demo26Component', () => {
  let component: Lib86Demo26Component;
  let fixture: ComponentFixture<Lib86Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
