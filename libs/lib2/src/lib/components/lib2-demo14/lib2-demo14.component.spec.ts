import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo14Component } from './lib2-demo14.component';

describe('Lib2Demo14Component', () => {
  let component: Lib2Demo14Component;
  let fixture: ComponentFixture<Lib2Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
