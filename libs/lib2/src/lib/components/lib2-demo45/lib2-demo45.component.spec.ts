import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo45Component } from './lib2-demo45.component';

describe('Lib2Demo45Component', () => {
  let component: Lib2Demo45Component;
  let fixture: ComponentFixture<Lib2Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
