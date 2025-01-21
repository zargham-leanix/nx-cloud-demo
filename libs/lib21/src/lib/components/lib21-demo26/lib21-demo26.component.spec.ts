import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo26Component } from './lib21-demo26.component';

describe('Lib21Demo26Component', () => {
  let component: Lib21Demo26Component;
  let fixture: ComponentFixture<Lib21Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
