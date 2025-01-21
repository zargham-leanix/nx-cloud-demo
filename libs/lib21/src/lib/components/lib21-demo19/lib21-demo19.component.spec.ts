import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo19Component } from './lib21-demo19.component';

describe('Lib21Demo19Component', () => {
  let component: Lib21Demo19Component;
  let fixture: ComponentFixture<Lib21Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
