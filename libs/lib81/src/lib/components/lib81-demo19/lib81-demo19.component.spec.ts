import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo19Component } from './lib81-demo19.component';

describe('Lib81Demo19Component', () => {
  let component: Lib81Demo19Component;
  let fixture: ComponentFixture<Lib81Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
