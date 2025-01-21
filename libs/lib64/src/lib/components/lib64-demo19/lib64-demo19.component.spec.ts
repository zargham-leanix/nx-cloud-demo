import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo19Component } from './lib64-demo19.component';

describe('Lib64Demo19Component', () => {
  let component: Lib64Demo19Component;
  let fixture: ComponentFixture<Lib64Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
