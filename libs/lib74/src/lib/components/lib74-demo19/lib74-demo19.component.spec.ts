import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo19Component } from './lib74-demo19.component';

describe('Lib74Demo19Component', () => {
  let component: Lib74Demo19Component;
  let fixture: ComponentFixture<Lib74Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
