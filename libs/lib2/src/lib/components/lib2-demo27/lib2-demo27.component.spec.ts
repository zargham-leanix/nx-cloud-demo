import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo27Component } from './lib2-demo27.component';

describe('Lib2Demo27Component', () => {
  let component: Lib2Demo27Component;
  let fixture: ComponentFixture<Lib2Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
