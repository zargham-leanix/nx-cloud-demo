import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo33Component } from './lib97-demo33.component';

describe('Lib97Demo33Component', () => {
  let component: Lib97Demo33Component;
  let fixture: ComponentFixture<Lib97Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
