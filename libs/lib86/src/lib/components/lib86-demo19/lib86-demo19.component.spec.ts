import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo19Component } from './lib86-demo19.component';

describe('Lib86Demo19Component', () => {
  let component: Lib86Demo19Component;
  let fixture: ComponentFixture<Lib86Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
