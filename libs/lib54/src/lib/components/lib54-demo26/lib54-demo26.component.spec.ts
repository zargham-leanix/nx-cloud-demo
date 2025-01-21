import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo26Component } from './lib54-demo26.component';

describe('Lib54Demo26Component', () => {
  let component: Lib54Demo26Component;
  let fixture: ComponentFixture<Lib54Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
