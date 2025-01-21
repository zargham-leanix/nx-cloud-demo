import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo29Component } from './lib2-demo29.component';

describe('Lib2Demo29Component', () => {
  let component: Lib2Demo29Component;
  let fixture: ComponentFixture<Lib2Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
