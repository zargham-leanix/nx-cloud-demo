import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo19Component } from './lib83-demo19.component';

describe('Lib83Demo19Component', () => {
  let component: Lib83Demo19Component;
  let fixture: ComponentFixture<Lib83Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
