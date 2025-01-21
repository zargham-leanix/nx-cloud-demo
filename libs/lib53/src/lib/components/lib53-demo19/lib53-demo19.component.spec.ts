import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo19Component } from './lib53-demo19.component';

describe('Lib53Demo19Component', () => {
  let component: Lib53Demo19Component;
  let fixture: ComponentFixture<Lib53Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
