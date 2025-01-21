import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo6Component } from './lib2-demo6.component';

describe('Lib2Demo6Component', () => {
  let component: Lib2Demo6Component;
  let fixture: ComponentFixture<Lib2Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
