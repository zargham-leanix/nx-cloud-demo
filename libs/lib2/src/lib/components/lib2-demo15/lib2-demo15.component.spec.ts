import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo15Component } from './lib2-demo15.component';

describe('Lib2Demo15Component', () => {
  let component: Lib2Demo15Component;
  let fixture: ComponentFixture<Lib2Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
