import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo19Component } from './lib5-demo19.component';

describe('Lib5Demo19Component', () => {
  let component: Lib5Demo19Component;
  let fixture: ComponentFixture<Lib5Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
