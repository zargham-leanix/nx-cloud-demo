import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo43Component } from './lib2-demo43.component';

describe('Lib2Demo43Component', () => {
  let component: Lib2Demo43Component;
  let fixture: ComponentFixture<Lib2Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
