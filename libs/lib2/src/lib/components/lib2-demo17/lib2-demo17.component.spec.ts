import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo17Component } from './lib2-demo17.component';

describe('Lib2Demo17Component', () => {
  let component: Lib2Demo17Component;
  let fixture: ComponentFixture<Lib2Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
