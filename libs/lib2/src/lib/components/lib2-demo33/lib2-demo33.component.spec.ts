import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo33Component } from './lib2-demo33.component';

describe('Lib2Demo33Component', () => {
  let component: Lib2Demo33Component;
  let fixture: ComponentFixture<Lib2Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
