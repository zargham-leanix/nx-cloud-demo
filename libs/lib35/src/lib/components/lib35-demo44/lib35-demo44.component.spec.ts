import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo44Component } from './lib35-demo44.component';

describe('Lib35Demo44Component', () => {
  let component: Lib35Demo44Component;
  let fixture: ComponentFixture<Lib35Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
