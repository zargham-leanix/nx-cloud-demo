import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo19Component } from './lib59-demo19.component';

describe('Lib59Demo19Component', () => {
  let component: Lib59Demo19Component;
  let fixture: ComponentFixture<Lib59Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
