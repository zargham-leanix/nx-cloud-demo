import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo12Component } from './lib2-demo12.component';

describe('Lib2Demo12Component', () => {
  let component: Lib2Demo12Component;
  let fixture: ComponentFixture<Lib2Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
