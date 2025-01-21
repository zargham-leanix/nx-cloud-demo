import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo19Component } from './lib35-demo19.component';

describe('Lib35Demo19Component', () => {
  let component: Lib35Demo19Component;
  let fixture: ComponentFixture<Lib35Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
