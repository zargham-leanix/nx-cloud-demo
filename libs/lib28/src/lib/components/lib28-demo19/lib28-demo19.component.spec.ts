import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo19Component } from './lib28-demo19.component';

describe('Lib28Demo19Component', () => {
  let component: Lib28Demo19Component;
  let fixture: ComponentFixture<Lib28Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
