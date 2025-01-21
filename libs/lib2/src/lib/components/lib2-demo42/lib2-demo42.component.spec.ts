import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo42Component } from './lib2-demo42.component';

describe('Lib2Demo42Component', () => {
  let component: Lib2Demo42Component;
  let fixture: ComponentFixture<Lib2Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
