import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo26Component } from './lib5-demo26.component';

describe('Lib5Demo26Component', () => {
  let component: Lib5Demo26Component;
  let fixture: ComponentFixture<Lib5Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
