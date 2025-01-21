import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo34Component } from './lib2-demo34.component';

describe('Lib2Demo34Component', () => {
  let component: Lib2Demo34Component;
  let fixture: ComponentFixture<Lib2Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
