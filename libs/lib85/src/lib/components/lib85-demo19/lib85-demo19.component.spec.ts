import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo19Component } from './lib85-demo19.component';

describe('Lib85Demo19Component', () => {
  let component: Lib85Demo19Component;
  let fixture: ComponentFixture<Lib85Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
