import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo3Component } from './lib2-demo3.component';

describe('Lib2Demo3Component', () => {
  let component: Lib2Demo3Component;
  let fixture: ComponentFixture<Lib2Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
