import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo19Component } from './lib42-demo19.component';

describe('Lib42Demo19Component', () => {
  let component: Lib42Demo19Component;
  let fixture: ComponentFixture<Lib42Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
