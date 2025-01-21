import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo19Component } from './lib94-demo19.component';

describe('Lib94Demo19Component', () => {
  let component: Lib94Demo19Component;
  let fixture: ComponentFixture<Lib94Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
