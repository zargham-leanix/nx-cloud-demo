import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo19Component } from './lib25-demo19.component';

describe('Lib25Demo19Component', () => {
  let component: Lib25Demo19Component;
  let fixture: ComponentFixture<Lib25Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
