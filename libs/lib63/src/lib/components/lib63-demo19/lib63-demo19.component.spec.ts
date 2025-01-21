import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo19Component } from './lib63-demo19.component';

describe('Lib63Demo19Component', () => {
  let component: Lib63Demo19Component;
  let fixture: ComponentFixture<Lib63Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
