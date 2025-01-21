import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo26Component } from './lib72-demo26.component';

describe('Lib72Demo26Component', () => {
  let component: Lib72Demo26Component;
  let fixture: ComponentFixture<Lib72Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
