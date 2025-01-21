import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo48Component } from './lib2-demo48.component';

describe('Lib2Demo48Component', () => {
  let component: Lib2Demo48Component;
  let fixture: ComponentFixture<Lib2Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
