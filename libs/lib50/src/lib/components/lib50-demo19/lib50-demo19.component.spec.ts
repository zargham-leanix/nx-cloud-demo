import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo19Component } from './lib50-demo19.component';

describe('Lib50Demo19Component', () => {
  let component: Lib50Demo19Component;
  let fixture: ComponentFixture<Lib50Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
