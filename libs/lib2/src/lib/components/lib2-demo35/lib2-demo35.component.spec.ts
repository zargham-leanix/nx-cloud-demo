import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo35Component } from './lib2-demo35.component';

describe('Lib2Demo35Component', () => {
  let component: Lib2Demo35Component;
  let fixture: ComponentFixture<Lib2Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
