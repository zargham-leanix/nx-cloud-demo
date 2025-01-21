import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo4Component } from './lib2-demo4.component';

describe('Lib2Demo4Component', () => {
  let component: Lib2Demo4Component;
  let fixture: ComponentFixture<Lib2Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
