import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo32Component } from './lib2-demo32.component';

describe('Lib2Demo32Component', () => {
  let component: Lib2Demo32Component;
  let fixture: ComponentFixture<Lib2Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
